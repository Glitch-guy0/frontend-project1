






export default function TopicHighlight(props) {
    return (
        <div className="w-full flex h-24 items-center">
            <div className="font-semibold text-3xl bg-green-400 mx-12 py-0 px-1 rounded-md">
                { props.title }
            </div>
            <p className="text-sm w-2/4 font-semibold">
                { props.desc }
            </p>
        </div>
    )
}