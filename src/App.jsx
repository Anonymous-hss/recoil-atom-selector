import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationsAtom,
  totalNotificationSelector,
} from "./atoms";

function App() {
  return (
    <>
      <RecoilRoot>
        <MainApp></MainApp>
      </RecoilRoot>
    </>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationCount = useRecoilValue(notificationsAtom);
  const [messageCount, setMessageCount] = useRecoilState(messagingAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <div>
      <button>Home</button>
      <button>
        My Network (
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messageCount})</button>
      <button>Notifications ({notificationCount})</button>
      <button
        onClick={() => {
          setMessageCount(messageCount + 1);
        }}
      >
        Here
      </button>
      <button>Me ({totalNotificationCount})</button>
    </div>
  );
}

export default App;
