import Image from "next/image";

export default function Img(){
    const preURL = "https://$S3BucketDomain/tempFile/preview_test_img.jpeg"
    return (
        <Image src={preURL} alt="" width={300} height={300}/>
    )
}