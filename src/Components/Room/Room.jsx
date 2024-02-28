import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

export default function Room() {
  const { id } = useParams();
  const myMeeting = async (element) => {
    const appID = 854451168;
    const serverSecret = "651b7b8df5acba76c4c8b7bc52b6c0cd";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      id,
      Date.now().toString(),
      "shuhaib T U "
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };
  return (
    <div className="room-page">
      <div ref={myMeeting} />
    </div>
  );
}
