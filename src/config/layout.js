// Font Size Configuration
// Change these values to adjust typography across the entire portfolio

export const FONT_SIZES = {
    // Hero section
    heroName: "text-[12vw] sm:text-[14vw] md:text-[16vw] lg:text-[16rem]", // MARK VU giant text
    heroSubtitle: "text-lg lg:text-2xl", // SFU CS Student | Software Engineer
    heroBio: "text-2xl lg:text-3xl", // Bio paragraph

    // Section headings
    sectionTitle: "text-2xl lg:text-4xl", // About Me, Work & Education, etc.

    // Content headings
    contentTitle: "text-2xl lg:text-3xl", // Project titles, job titles
    contentSubtitle: "text-xl lg:text-2xl", // Company names, dates

    // Body text
    bodyLarge: "text-2xl lg:text-3xl", // Main paragraphs, important text
    bodyMedium: "text-xl lg:text-2xl", // Secondary paragraphs
    bodySmall: "text-lg", // Small text, labels
    bodyTiny: "text-base", // Very small text, captions

    // Navigation
    navBrand: "text-2xl", // M.V brand
    navLinks: "text-lg", // About, Work, Projects, Contact

    // Buttons and UI
    buttonText: "text-lg",
    tagText: "text-sm", // Tech tags, status badges
};

// Section configuration
export const LAYOUT_CONFIG = {
    // Section spacing (padding top and bottom)
    sections: {
        hero: {
            padding: "px-6 lg:px-12",
            maxWidth: "max-w-screen-2xl mx-auto w-full",
        },
        about: {
            padding:
                "py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 lg:px-12",
            maxWidth: "max-w-screen-2xl mx-auto",
        },
        work: {
            padding:
                "py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 lg:px-12",
            maxWidth: "max-w-screen-2xl mx-auto",
        },
        projects: {
            padding:
                "py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 lg:px-12",
            maxWidth: "max-w-screen-2xl mx-auto",
        },
        contact: {
            padding:
                "py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 lg:px-12",
            maxWidth: "max-w-screen-2xl mx-auto",
            background: "bg-white",
            textColor: "text-black",
        },
        footer: {
            padding: "py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 lg:px-12",
            maxWidth: "max-w-screen-2xl mx-auto",
        },
    },

    // Common gaps and spacing
    spacing: {
        sectionGap: "gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24",
        contentGap: "gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12",
        smallGap: "gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6",
    },
};

// Helper functions
export const getSectionClasses = (sectionName) => {
    const section = LAYOUT_CONFIG.sections[sectionName];
    if (!section) return "";

    const classes = [section.padding];
    if (section.background) classes.push(section.background);
    if (section.textColor) classes.push(section.textColor);

    return classes.join(" ");
};

export const getContainerClasses = (sectionName) => {
    const section = LAYOUT_CONFIG.sections[sectionName];
    return section?.maxWidth || "max-w-screen-2xl mx-auto";
};
