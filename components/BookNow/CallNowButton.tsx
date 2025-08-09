import IconsPack from "../../public/images/IconsPack";
const CallNowButton = () => {
  const handleCallNow = () => {
    window.open(
      "https://wa.me/+97333644411?text=I%20like%20to%20book%20rooms%20in%20Al%20Safir%20Hotel",
      "_blank"
    );
  };

  return (
    <div>
      <div
        onClick={handleCallNow}
        className="absolute bg-black flex ring-2 ring-primary justify-center bg-opacity-80 hover:bg-opacity-100 items-center h-14 w-14 rounded-full bottom-4 right-4"
        style={{ cursor: "pointer" }}
      >
        <div className="w-full h-full">{IconsPack.whatsappIcon}</div>
      </div>
    </div>
  );
};

export default CallNowButton;
