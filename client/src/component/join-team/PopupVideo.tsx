import { useEffect, useRef, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";


declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const YouTubePopup = () => {
  const [open, setOpen] = useState(false);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    // Only show once
    // localStorage.removeItem("seenYouTubePopup");
    const hasSeenVideo = localStorage.getItem("seenYouTubePopup");
    if (!hasSeenVideo) {
      setOpen(true);
      localStorage.setItem("seenYouTubePopup", "true");
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      // Load YouTube API if not loaded
      if (!window.YT) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
      }

      // Called by API when ready
      window.onYouTubeIframeAPIReady = () => {
        playerRef.current = new window.YT.Player("yt-popup-video", {
          videoId: "3tOmGL4dRdc", // video ID
           playerVars: {
          autoplay: 1,
          controls: 1,
        },
          events: {
            onStateChange: (event: any) => {
              if (event.data === window.YT.PlayerState.ENDED) {
                setOpen(false); // close when video ends
              }
            },
          },
        });
      };
    }
  }, [open]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(8px)",
          },
        },
        paper: {
          sx: {
            background: "transparent",
            boxShadow: "none",
          },
        },
      }}
    >
      <DialogContent
        sx={{
          background: "transparent",
          padding: 0,
        }}
      >
        <div className="relative pb-[56.25%] h-0">
          {/* YT API will inject iframe here */}
          <div
            id="yt-popup-video"
            className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden"
          ></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default YouTubePopup;