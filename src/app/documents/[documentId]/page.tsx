import { Editor } from "./editor";
import Toolbar from "./toolbar";

interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

const DocumentsIdPage = async ({ params }: DocumentIdPageProps) => {
  const awaitedParams = await params;
  const documentId = awaitedParams.documentId;
  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <Toolbar />
      <Editor />
    </div>
  );
};

export default DocumentsIdPage;
