const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="Layout-Title">About Layout</div>
            <div className="Layout-content">{children}</div>
        </>
    );
};

export default layout;
