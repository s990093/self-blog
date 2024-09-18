import React from "react";

const MusicEmbed = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <iframe
        allow="autoplay; encrypted-media; fullscreen; clipboard-write"
        frameBorder="0"
        height="450"
        style={{
          width: "100%",
          maxWidth: "660px",
          overflow: "hidden",
          borderRadius: "10px",
        }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.music.apple.com/tw/playlist/c/pl.u-NpXm9YkF40BX7gd?l=en-GB"
        title="Music Playlist"
      ></iframe>
    </div>
  );
};

export default MusicEmbed;
