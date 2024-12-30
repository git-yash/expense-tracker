export function ErrorMessage(props: { error: string | undefined }) {
    return props.error ? (
        <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
        >
            <span className="block sm:inline">{props.error}</span>
        </div>
    ) : null;
}
