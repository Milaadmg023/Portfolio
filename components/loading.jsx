export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center bg-white fixed top-0 left-0 right-0 bottom-0">
      <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
    </div>
  );
}
