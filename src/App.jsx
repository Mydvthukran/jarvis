import CenterPanel from "./components/CenterPanel.jsx";
import HudGrid from "./components/HudGrid.jsx";
import LeftPanel from "./components/LeftPanel.jsx";
import RightPanel from "./components/RightPanel.jsx";
import Topbar from "./components/Topbar.jsx";

export default function App() {
  return (
    <>
      <HudGrid />
      <main className="dashboard">
        <Topbar />
        <LeftPanel />
        <CenterPanel />
        <RightPanel />
      </main>
    </>
  );
}
