import { useCallback, useRef, useState } from 'react';
import Webcam from "react-webcam";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@nextui-org/button';
import { Avatar, Chip } from '@nextui-org/react';
import { FaCamera, FaRegTrashAlt } from 'react-icons/fa';
import { IoIosSend } from 'react-icons/io';
import axiosApi from "@/services/axiosConfig";
import useWebcamStore from '@/context/webcamStore';
const { v4: uuidv4 } = require('uuid');

export default function WebcamComp() {
  //webcam
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState<Blob | undefined>(undefined)
  const [imgUrl, setImgUrl] = useState('')
  const [uuidImage, setUuidImage] = useState('');
  //Loading
  const [stateDisableButton, setStateDisableButton] = useState(false)
  const [loadingButton, setLoadingButton] = useState(false)

  //context
  const setUrlImage = useWebcamStore((state)=> state.setUrlImage)
  const setNameImageCloud = useWebcamStore((state)=> state.setNameImageCloud)

  // Função para converter a string de dados URI em um objeto Blob
  const dataURItoBlob = (dataURI: any) => {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot({ width: 854, height: 480 });
    if (imageSrc) {
      const blobData = dataURItoBlob(imageSrc);
      setImgSrc(blobData);
      const imageURL = URL.createObjectURL(blobData);
      setImgUrl(imageURL)
      const uuid = uuidv4();
      setUuidImage(uuid);
    }
  }, [webcamRef, setImgSrc]);

  function deleteImage() {
    setImgSrc(undefined);
  }

  function sendImage(file: any, nameImage: string) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('nameImage', nameImage)

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    axiosApi.post('/upload/provider', formData, config)
      .then(function (response) {
        setStateDisableButton(true);
        setUrlImage(response.data.url)
        setNameImageCloud(response.data.public_id)
        if (response.status === 200) {
          toast.success("Imagem enviada com sucesso!")
          setLoadingButton(false);
        }
      })
      .catch(function (error) {
        console.error(error);
        toast.error("Erro ao enviar imagem!");
      });
  }

  return (
    <div className="w-full flex justify-center items-center">
      {imgSrc === undefined
        ?
        <div className="grid justify-items-center content-center space-y-1 relative">
          <Webcam
            className="rounded-full w-44 h-44 border-2 border-blue-600 flex justify-center items-center"
            screenshotFormat="image/png"
            ref={webcamRef}
            audio={false}
            screenshotQuality={1}
            disablePictureInPicture
          />
          <div className="w-1 h-1 bg-red-500 rounded-full absolute top-20"></div>
          <Button isIconOnly onPress={capture} color="primary" endContent={<FaCamera />}></Button>
        </div>
        :
        <div className="grid justify-items-center content-center space-y-1 relative">
          <Avatar className="w-28 h-28 text-large" src={imgUrl || ''} />
          <div className="flex justify-center items-center space-x-2">
            {stateDisableButton ?
              <Chip color="success">Imagem enviada - Por favor clique no botão salvar/cadastrar</Chip>
              :
              <>
                <Button
                  isIconOnly
                  onPress={() => deleteImage()}
                  color="danger"
                  isDisabled={stateDisableButton}
                ><FaRegTrashAlt /></Button>
                <Button
                  isIconOnly
                  onPress={() => (sendImage(imgSrc, uuidImage), setLoadingButton(true))}
                  isDisabled={stateDisableButton}
                  isLoading={loadingButton}
                  color="primary"
                ><IoIosSend /></Button>
              </>
            }
          </div>
        </div>
      }
    </div>
  )
}