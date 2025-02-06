interface SpacerProps {
    isReversed: boolean;
}

const Spacer = ({ isReversed }: SpacerProps) => {
    return (
        <div className={`flex ${isReversed ? 'flex-row-reverse' : 'flex-row'} items-center p-5`}>
            <div className="rounded-full w-[20px] h-[20px] bg-white"></div>
            <div className="rounded-lg w-[75vw] h-[3px] bg-white"></div>
        </div>
    );
};

export default Spacer;