import Meta from "../components/Meta";
import ImageGallery from "react-image-gallery";
import useMediaQuery from "../components/useMediaQueryHook";

const Gallery = ({ meta, img }) => {
	const domain = "http://localhost:1337"; //domena strapi

	//mapowanie zdjęć z API strapi images

	const images = img.data.map((img) => {
		// media query dla urządzeń poniżej i powyżej 700px width, różna rozdzielczość zdjęć
		const org = useMediaQuery(700)
			? JSON.stringify(
					img.attributes.zdjecia.data[0].attributes.formats.medium.url
			  )
			: JSON.stringify(
					img.attributes.zdjecia.data[0].attributes.formats.large.url
			  );
		const thumb = JSON.stringify(
			img.attributes.zdjecia.data[0].attributes.formats.thumbnail.url
		);

		return {
			key: img.id,
			original: org.substring(1, org.length - 1),
			thumbnail: thumb.substring(1, thumb.length - 1),
		};
	});

	return (
		<section className="gallery">
			<Meta title={meta.data.attributes.metaGalleryTitle} />
			<h1 className="gallery__title">Realizacje</h1>

			<ImageGallery items={images} />

			<img
				src="../assets/footprints.png"
				alt="dog footprints"
				className="gallery__image"
			/>
		</section>
	);
};

export default Gallery;

export async function getStaticProps() {
	const resMeta = await fetch("http://localhost:1337/api/meta");
	const meta = await resMeta.json();

	const resImage = await fetch("http://localhost:1337/api/images?populate=*");
	const img = await resImage.json();

	return {
		props: { meta, img },
		revalidate: 60,
	};
}
