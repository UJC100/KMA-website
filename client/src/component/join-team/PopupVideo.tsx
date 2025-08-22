import { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

const YouTubePopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasSeenVideo = localStorage.getItem("seenYouTubePopup");
    if (!hasSeenVideo) {
      setOpen(true);
      localStorage.setItem("seenYouTubePopup", "true"); // remember for future
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

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
  }}
    >
      <DialogContent>
        <div className="relative pb-[56.25%] h-0">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg border-0"
            src="https://www.youtube.com/embed/3tOmGL4dRdc?si=_uX2q12Y3F4dAe4k?autoplay=1"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default YouTubePopup;
