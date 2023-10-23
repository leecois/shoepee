import { Bounds, useGLTF } from '@react-three/drei';
import { useContext, useRef } from 'react';
import { CustomizationContext } from '../../../layout/CustomizationContext';

function ModelShoe({ ...props }) {
  const { nodes, materials } = useGLTF('/model/model.glb');
  const group = useRef();
  const { setIsOpenModal, customization, setCustomization } =
    useContext(CustomizationContext);

  const handleClick = (e) => {
    e.stopPropagation();
    setCustomization((prevState) => ({
      ...prevState,
      layerName: e.object.material.name,
    }));
    setIsOpenModal(true);
  };

  return (
    <Bounds fit observe margin={0.8}>
      <group {...props} ref={group} dispose={null}>
        <mesh
          geometry={nodes.shoe.geometry}
          material={materials.laces}
          material-color={customization.layerColor.laces}
          onClick={(e) => handleClick(e)}
        />
        <mesh
          geometry={nodes.shoe_1.geometry}
          material={materials.mesh}
          material-color={customization.layerColor.mesh}
          onClick={(e) => handleClick(e)}
        />

        <mesh
          geometry={nodes.shoe_2.geometry}
          material={materials.caps}
          material-color={customization.layerColor.caps}
          onClick={(e) => handleClick(e)}
        />
        <mesh
          geometry={nodes.shoe_3.geometry}
          material={materials.inner}
          material-color={customization.layerColor.inner}
          onClick={(e) => handleClick(e)}
        />
        <mesh
          geometry={nodes.shoe_4.geometry}
          material={materials.sole}
          material-color={customization.layerColor.sole}
          onClick={(e) => handleClick(e)}
        />
        <mesh
          geometry={nodes.shoe_5.geometry}
          material={materials.stripes}
          onClick={(e) => handleClick(e)}
          material-color={customization.layerColor.stripes}
        />
        <mesh
          geometry={nodes.shoe_6.geometry}
          material={materials.band}
          onClick={(e) => handleClick(e)}
          material-color={customization.layerColor.band}
        />
        <mesh
          geometry={nodes.shoe_7.geometry}
          material={materials.patch}
          onClick={(e) => handleClick(e)}
          material-color={customization.layerColor.patch}
        />
      </group>
    </Bounds>
  );
}

export default ModelShoe;
