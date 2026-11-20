import { Link } from "react-router-dom";
import { APP_CONFIGURATION } from "../../configuration/configuration";

export function Footer(props: Props) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
            <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
                {/* Brand and social links */}
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <Link
                        to={APP_CONFIGURATION.brand.url}
                        className="text-xl font-bold text-[var(--color-content)]"
                    >
                        {APP_CONFIGURATION.brand.name}
                    </Link>

                    <div className="flex flex-wrap gap-3">
                        {props.socialLinks?.map(social => (
                            <a
                                key={social.label}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="flex h-11 min-w-11 items-center justify-center rounded-lg border border-[var(--color-border)] px-3 text-sm font-medium text-[var(--color-content)] transition-colors hover:bg-[var(--color-surface-hover)]"
                            >
                                {social.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Footer navigation */}
                <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
                    {props.columns?.map(column => (
                        <div key={column.title}>
                            <h3 className="mb-4 font-medium text-[var(--color-accent)]">
                                {column.title}
                            </h3>

                            <ul className="space-y-2">
                                {column.links.map(link => (
                                    <li key={link.url}>
                                        <Link
                                            to={link.url}
                                            className="text-sm text-[var(--color-content)] transition-colors hover:text-[var(--color-accent)]"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Copyright */}
                <div className="mt-12 border-t border-[var(--color-border)] pt-6">
                    <p className="text-sm text-[var(--color-muted)]">
                        © {new Date().getFullYear()}{" "}
                        {APP_CONFIGURATION.brand.name}
                    </p>
                </div>
            </div>
        </footer>
    );
}

type FooterLink = {
    label: string;
    url: string;
};

export type FooterSocialLink = {
    label: string;
    url: string;
};

export type FooterColumn = {
    title: string;
    links: FooterLink[];
};

type Props = {
    columns?: FooterColumn[];
    socialLinks?: FooterSocialLink[];
};
