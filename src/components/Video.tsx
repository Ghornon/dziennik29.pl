interface VideoProps {
	videoId: string;
}

const Video = ({ videoId }: VideoProps) => {
	return (
		<div className="youtube-full-page">
			<iframe
				src={`https://www.youtube.com/embed/${videoId}`}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen
			/>
		</div>
	);
};

export default Video;
