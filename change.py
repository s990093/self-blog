import trimesh

def simplify_stl(input_file, output_file, reduction_ratio=0.5):
    # 读取 STL 文件
    mesh = trimesh.load_mesh(input_file)

    # 计算简化后的顶点数量
    original_vertex_count = len(mesh.vertices)
    target_vertex_count = int(original_vertex_count * reduction_ratio)

    # 简化模型
    simplified_mesh = mesh.sim(target_vertex_count)
    simplified_vertex_count = len(simplified_mesh.vertices)

    # 显示简化前后的顶点数量
    print(f"Original vertex count: {original_vertex_count}")
    print(f"Simplified vertex count: {simplified_vertex_count}")

    # 保存简化后的 STL 文件
    simplified_mesh.export(output_file)

simplify_stl('input.stl', 'output.stl', reduction_ratio=0.6)
