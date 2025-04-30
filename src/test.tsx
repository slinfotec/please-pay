import Head from 'next/head';
import MusicUploader from '../components/MusicUploader';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Music Uploader</title>
        <meta name="description" content="Upload and animate MP3 files" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MusicUploader />
    </div>
  );
}