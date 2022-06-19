import { useThree, useLoader } from "@react-three/fiber";
import { useEffect, useState } from "react";
import * as THREE from 'three';
import Amplify from "@aws-amplify/core"
import { Storage } from "aws-amplify"
import panorama from "../../public/panoramas/panorama.jpg"

//Used for connecting AWS
Amplify.configure({
    Auth: {
        region: 'eu-central-1',
        identityPoolId: 'eu-central-1:d3080cb0-0880-44cc-a3f8-cdab62be9274',
    },
    Storage: {
        AWSS3: {
            bucket: 'kyberna-three-dee',
            region: 'eu-central-1',
        }
    }
})

export default function PanoramaImage({ data }) {

    //const [image, setImage] = useState("https://kyberna-three-dee.s3.eu-central-1.amazonaws.com/public/panoramas/museum.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAUBK4I62RUGPLOOMP%2F20220530%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20220530T194237Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaDGV1LWNlbnRyYWwtMSJGMEQCIEg%2BCh2Kjvnc1njA%2Bdk9xkGX%2B0Zl3hNon5gjcu2DmbJ8AiA2bQjKvpwuAkCEZJMt5LJanTtjn8J1s0gMAViQ1yIt2yqXBggdEAAaDDI3Nzc1NTc4NjkxNSIMfmareWf56gfseOpfKvQFu6QNDTeVu823Csle8ihqjBz0WIPynT4k5BSLYLjoo%2FB%2BC8MYAYnzpWNSpK7JgFDN2smCiFAx8E0Llj7KtnQ9R9HDx9d8YTorG9fCqXvsY25DE5nQ9NCpW76UtUToZ9PhI4J9gnDPP3yQ9oTsqvuc%2F%2FSYrfv%2FOWX2dRm%2Bf2hXKJMREDtivqe5tVdYIsiyT3ln2El%2Bx9XER3PZ%2BMO%2Bi6wPBzZ0Ay9jfplCjinkuaoKnaXc8jq9BG9KVAXTdPkoBT9NFjZcBVBw1jx4P8TxKFRFShdzNkBhwLkmPHAnnOB6hHhDHNwNWzqXntfYu11py2%2FDALPVKZcX8zMOBuu4EiYmoKY0yYSFbQ2Wye%2FUKPDdFHthAOOZpGH4lrqhnEacipxXTnqI1zeDEl08sxo16%2FPKTnWYpU2D2e7GowKUYgu%2F%2BJGh3ZYhTikB1NQbAF5VMMBgiT0KAd8e4HmC1g3lQ%2FeqltSfsytOjmqQGLgRcvaQLmQ0m26VXkPvOkqAfBY8ZjB8cRUUwBIpjPh7D3Gtjf4inYgLfhSv3uMvRZoPne8vOtAYAw3YX63PiG1y67MVTkuQ0YF8byJ6p%2BjDemgpjiaOxsc%2FyqNagQqkcmH393rp3IjQ6bOuqV%2BAbliLR16ki9BZ41RBt6VjwD9rdJjpCYYgdcO%2B7vChDhf01Y4U4regkT8RvU4lsQyhVmR1YNMXsjGhLaV58WNn2ZNFFubUdUYJc9zI4N2orNAgtvuStODJwBL4rkfLc7FMtqmgAHsKjSB2jK0uWcoa3M8Cfy7tKuPBFE91VSalviIK5%2FFoA7CigGmj3OKxUeB8n%2FXbA2wL1XCSACEZP%2BjPk%2FD5GghPG7lLL8%2FL5L1CEMkIjdYuCs40Mf1Ijbt436HlQCE4VR5e25BlE0fmbl%2FnrCiVtcbN7CRT%2BvTywGMQPRn2PqLtaznggyXCHzkyxPEI4ywyrhZFOr00AwusWKK%2BiILLvD6%2FJQEiipoYIbdZgz9TrEFFoY8Uhh49wEC7MJW81JQGOogCUoDZQYAMbzIGsEgmwnfAMfqnHpEcTM977rUEqx8ltRVXz6uu6bSXfQwXRq41RLbrtf3c7Qe35wI%2BuDCP1YderDRuoSlG8bv%2FFRiDYacoGe5pZS%2Bk5V8UIVeQwgZ9qm2t3%2FQzqO98fc6dQqUsUNss1X%2BK8LLnmrkJFQztcRGBhpQ9PsZHHveUPuxUIudWEfp3%2ByRoAy9tNrSU%2BYiUxAK0t8JiWtAhZXBJblPGyUEwD2%2BcXACAS8GCnFaDJDzdw%2FD6Hzn21fFScu96ha0Z8ihvmwndzVy8YzuQkSvLzKbLk2fUIIsQx1u3rz3Z7%2F%2FovRDuhwSti2YARbdfKXK9Vcg%2F7KAPAcFcW9qd&X-Amz-Signature=ca008ee9c35a0b4bebc364ff4a515fd4123a9ed54b463c836e30a205fcb80d51&X-Amz-SignedHeaders=host&x-amz-user-agent=aws-sdk-js%2F3.6.1%20os%2FWindows%2FNT_10.0%20lang%2Fjs%20md%2Fbrowser%2FChrome_102.0.5005.62%20api%2Fs3%2F3.6.1%20aws-amplify%2F4.5.5_js&x-id=GetObject");
    //const [texture, setTexture] = useState();
    const image = "../../public/panoramas/panorama.jpg"
    
    /*
    //Used for getting item from DB
    useEffect(() => {
        Storage.get('panoramas/' + data.image.toLowerCase() + '.jpg').then(img => {
            setImage(img);
        }).catch(error => console.log(error))
    }, [])
    */

    const texture = useLoader(THREE.TextureLoader, "../../public/panoramas/panorama.jpg");
    texture.encoding = THREE.sRGBEncoding;
    texture.mapping = THREE.EquirectangularReflectionMapping;

    console.log(image);

    
    scene.background = texture;
    const { scene } = useThree();

    return null;
};