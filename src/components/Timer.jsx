const Timer = ({ count }) => {
    return (
        <>
            <div className="bg-blue-800 w-48 mt-16 aspect-square rounded-full flex items-center justify-center mx-auto timer-border">
                <p className="text-8xl">
                    {count}
                </p>
            </div>
        </>
    );
}

export default Timer;