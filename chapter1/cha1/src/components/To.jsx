import { useState } from "react";

export default function To() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="rounded-lg bg-gray-900 text-white p-6">
            <button
                onClick={() => setVisible(!visible)}
                className="mb-4 px-6 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors duration-300 font-semibold shadow-md"
            >
                {visible ? "Hide" : "Show"} Message
            </button>

            {visible && (
                <p className="text-lg text-green-300 font-medium">
                    How are you?
                </p>
            )}

            {!visible && (
                <p className="text-gray-400 italic">
                    Click to show message
                </p>
            )}
        </div>
    );
}
