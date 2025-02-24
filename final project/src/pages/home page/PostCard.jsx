

export default function PostCard({ title, Category, image, beforPrice, afterPrice }) {
    return (
        <div className="PostCard">
            <div>
                <img src={image} alt="" />
            </div>
            <span className={`title`}>{title}</span>
            <h2>{Category}</h2>
            <p>{<del>{beforPrice}</del>} {afterPrice}</p>
        </div>
    );
}
