const PodcastEmbed = () => {
  return (
    <div className="flex justify-center mt-10 md:mt-0 w-[90%] mid:w-[100%]">
      <iframe
        allow="autoplay *; encrypted-media *"
        height="175"
        style={{
          width: "100vw",
          maxWidth: "600px",
          height: "450px",
          borderRadius: "12px",
          border: "none",
        }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
        src="https://embed.podcasts.apple.com/us/podcast/dream-church-with-joshua-brown/id1291957659?itscg=30200&itsct=podcast_box_player&ls=1&mttnsubad=1291957659&theme=auto&wmode=opaque"
      ></iframe>
    </div>
  );
};

export default PodcastEmbed;
