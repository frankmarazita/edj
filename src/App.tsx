import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"

function App() {
  return (
    <PanelGroup direction="horizontal" className="gap-1">
      <Panel minSize={5} className="flex flex-col flex-grow bg-blue-400">
      </Panel>

      <PanelResizeHandle />

      <Panel defaultSize={70} className="gap-1">
        <PanelGroup direction="vertical" className="gap-1">
          <Panel minSize={30} className="flex flex-col flex-grow bg-blue-400">
          </Panel>

          <PanelResizeHandle />

          <Panel defaultSize={70} className="flex flex-col flex-grow ">
          <PanelGroup direction="horizontal" className="gap-1">
            <Panel minSize={15} className="flex flex-col flex-grow bg-blue-400">
            </Panel>

            <PanelResizeHandle />

            <Panel defaultSize={70} className="flex flex-col flex-grow bg-blue-400">
            </Panel>

            <PanelResizeHandle />

            <Panel minSize={15} className="flex flex-col flex-grow bg-blue-400">
            </Panel>
          </PanelGroup>
          </Panel>
        </PanelGroup>
      </Panel>

      <PanelResizeHandle />

      <Panel minSize={5} className="flex flex-col flex-grow bg-blue-400">
      </Panel>
    </PanelGroup>
  )
}

export default App
