"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChartData, ChartOptions } from "chart.js";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

interface VisitRecord {
  ip_address: string;
  visit_time: string;
}

const VisitDashboard: React.FC = () => {
  const [visitData, setVisitData] = useState<VisitRecord[]>([]);
  const [chartData, setChartData] = useState<ChartData<"line">>({
    labels: [],
    datasets: [],
  });

  // 將時間按小時進行分組
  const groupByHour = (data: VisitRecord[]) => {
    const groupedData: { [hour: string]: number } = {};

    data.forEach((record) => {
      const date = new Date(record.visit_time);
      const hour = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()} ${date.getHours()}:00`;

      if (groupedData[hour]) {
        groupedData[hour] += 1;
      } else {
        groupedData[hour] = 1;
      }
    });

    return groupedData;
  };

  // 獲取訪問記錄數據
  useEffect(() => {
    axios
      .get("https://lai.api.iside.space/web/record_visit/")
      .then((response) => {
        setVisitData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching visit data:", error);
      });
  }, []);

  // 當數據變更後更新圖表數據
  useEffect(() => {
    if (visitData.length > 0) {
      const groupedData = groupByHour(visitData);

      // 將分組的數據轉換為圖表所需的格式
      const labels = Object.keys(groupedData).sort(); // 按時間排序
      const visitCounts = Object.values(groupedData);

      setChartData({
        labels, // 時間（每小時為單位）
        datasets: [
          {
            label: "每小時訪問次數",
            data: visitCounts, // 每小時的訪問次數
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderWidth: 2,
          },
        ],
      });
    }
  }, [visitData]);

  // 圖表配置
  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "時間（每小時）",
        },
      },
      y: {
        title: {
          display: true,
          text: "訪問次數",
        },
        ticks: {
          precision: 0, // 讓刻度顯示整數
        },
      },
    },
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">每小時訪問次數</h2>
      {chartData.labels && chartData.labels.length > 0 ? (
        <Line data={chartData} options={options} />
      ) : (
        <p>正在加載訪問數據...</p>
      )}
    </div>
  );
};

export default VisitDashboard;
