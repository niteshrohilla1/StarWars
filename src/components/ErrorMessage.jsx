export default function ErrorMessage({ message }) {
    return (
        <div className="flex flex-col items-center justify-center py-10 px-6 text-center animate-fadeIn">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Oops, something’s off!
            </h2>
            <button
                onClick={() => window.location.reload()}
                className="px-5 py-2.5 bg-amber-500 text-white rounded-lg shadow hover:bg-red-600 transition"
            >
                Retry
            </button>
        </div>
    );
}
