import { FONT_SIZES } from "../config/layout";

export default function Badge({ text, variant = "default", className = "" }) {
    const variants = {
        default: "rounded-full border border-gray-300 px-3 py-1",
        filled: "rounded-full bg-gray-100 border border-gray-200 px-3 py-1",
        outline: "rounded-full border border-gray-300 px-3 py-1",
        colored:
            "rounded-full bg-blue-100 text-blue-800 border border-blue-200 px-3 py-1",
    };

    return (
        <div
            className={`${variants[variant]} ${FONT_SIZES.tagText} ${className}`}
        >
            {text}
        </div>
    );
}
