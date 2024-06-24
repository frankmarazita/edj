import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"

function App() {
  return (
    <div className="flex flex-col flex-grow">
      <PanelGroup direction="horizontal" className="gap-1">
        <Panel minSize={5} className="flex flex-col flex-grow bg-blue-400">
        </Panel>
        <PanelResizeHandle />
        <Panel defaultSize={70} className="flex flex-col flex-grow bg-blue-400">
        </Panel>
        <PanelResizeHandle />
        <Panel minSize={5} className="flex flex-col flex-grow bg-blue-400">
        </Panel>
      </PanelGroup>
    </div>
  )
}

export default App
