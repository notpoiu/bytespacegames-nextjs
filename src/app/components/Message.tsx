interface Message {
    title: string;
    message: string;
}

export default function Message({ title, message }: Message) {
    return (
        <div className="messagediv">
            <h1>{title}</h1>
            <p>{message}</p>
        </div>
    )
}