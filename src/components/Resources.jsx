/* this component will handle the Resources display */

function Resources() {
    return (
      <section className="container mx-auto px-6 py-12 space-y-4">
        <h2 className="text-3xl font-semibold">Resident Resources</h2>
        <ul className="list-disc pl-5 space-y-2 text-blue-600">
          <li><a href="https://docs.google.com/document/d/1Ki_o578KHIJk-M9Ghpm6Wh9bmKeWjcCGAjiFihApWUs/edit?tab=t.0#heading=h.gjdgxs">House Rules</a></li>
          <li><a href="https://docs.google.com/document/d/1OM8FKmGDUCEzVSrLpT-ijzaWwXg_QeabjA0eCtsW-wk/edit?tab=t.0">Building FAQ</a></li>
          <li><a href="https://docs.google.com/document/d/1rbZD69nvsLS_sYuydxCtWUhtG3jz35jEQrWLVG_RkbU/edit?usp=sharing">Service Request Forms</a></li>
          <li><a href="https://docs.google.com/document/d/1GklC0HWIMansK_R218o8Sc4OaAIzdVY-laxBZMZJ4iI/edit">Noise Guidelines</a></li>
        </ul>
      </section>
    );
}

export default Resources;