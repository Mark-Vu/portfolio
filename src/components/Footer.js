import {
    getSectionClasses,
    getContainerClasses,
    FONT_SIZES,
} from "../config/layout";

export default function Footer() {
    return (
        <footer className={getSectionClasses("footer")}>
            <div className={getContainerClasses("footer")}>
                <div className="text-center">
                    <div className="text-6xl mb-6">👋</div>
                    <h3 className={`${FONT_SIZES.contentTitle} font-bold mb-4`}>
                        Thanks for stopping by!
                    </h3>
                    <p
                        className={`${FONT_SIZES.bodyMedium} text-gray-600 mb-8 max-w-2xl mx-auto`}
                    >
                        Built with ❤️ using Next.js, Tailwind CSS, Stack
                        Overflow, and unhealthy amounts of coffee
                    </p>
                    <div className={`${FONT_SIZES.bodySmall} text-gray-500`}>
                        &copy; 2024 Mark Vu. No bugs were harmed in the making
                        of this portfolio.*
                        <br />
                        <span className={FONT_SIZES.bodyTiny}>
                            *Some bugs may have been gently relocated to
                            production
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
