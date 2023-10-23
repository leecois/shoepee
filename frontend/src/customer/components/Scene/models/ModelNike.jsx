import { Bounds, useGLTF } from '@react-three/drei';
import { useCallback, useContext, useRef } from 'react';
import { CustomizationContext } from '../../../layout/CustomizationContext';

function ModelNike({ ...props }) {
  const { nodes, materials } = useGLTF('/model/ModelNike3D.glb');
  const group = useRef();
  const { setIsOpenModal, customization, setCustomization } =
    useContext(CustomizationContext);

  const handleClick = useCallback(
    (e) => {
      e.stopPropagation();
      setCustomization((prevState) => ({
        ...prevState,
        layerName: e.object.material.name,
      }));
      setIsOpenModal(true);
    },
    [setCustomization, setIsOpenModal]
  );

  return (
    <Bounds fit observe clip damping={0} margin={1} >
      <group {...props} ref={group} dispose={null} position={[0, 0,0 ]}>
        <group position={[0, 0, 0.146]}>
          <mesh
            geometry={nodes.Plane044.geometry}
            material={materials['Main Body Material']}
            material-color={customization.layerColor['Main Body Material']}
            onClick={(e) => handleClick(e)}
          />
          <mesh
            geometry={nodes.Plane044_1.geometry}
            material={materials['Sole Material']}
            material-color={customization.layerColor['Sole Material']}
            onClick={(e) => handleClick(e)}
          />
          <mesh
            geometry={nodes.Plane044_2.geometry}
            material={materials['Main Shoe Inside']}
            material-color={customization.layerColor['Main Shoe Inside']}
            onClick={(e) => handleClick(e)}
          />
          <mesh
            geometry={nodes.Plane044_3.geometry}
            material={materials['Insole Material']}
            material-color={customization.layerColor['Insole Material']}
            onClick={(e) => handleClick(e)}
          />
          <mesh
            geometry={nodes.Laces006.geometry}
            material={materials['Laces Material']}
            material-color={customization.layerColor['Laces Material']}
            position={[-0.087, 0.081, -0.001]}
            rotation={[0, 0, 0.45]}
            onClick={(e) => handleClick(e)}
          />
          <mesh
            geometry={nodes.Nike_Logo_left005.geometry}
            material={materials['Logo left Material']}
            material-color={customization.layerColor['Logo left Material']}
            position={[0.213, 0.065, 0.033]}
            rotation={[0, 0.174, 0]}
            onClick={(e) => handleClick(e)}
          />
          <mesh
            geometry={nodes.Nike_Logo_right005.geometry}
            material={materials['Logo right Material']}
            material-color={customization.layerColor['Logo right Material']}
            position={[0.213, 0.065, -0.087]}
            rotation={[0, 0.044, 0]}
            onClick={(e) => handleClick(e)}
          />
          <mesh
            geometry={nodes.Shoe_Flap010.geometry}
            material={materials['Flap Material.002']}
            material-color={customization.layerColor['Flap Material.002']}
            position={[0, -0.005, 0]}
            onClick={(e) => handleClick(e)}
          />
          <mesh
            geometry={nodes.Shoe_Flap011.geometry}
            material={materials['Tag material']}
            material-color={customization.layerColor['Tag material']}
            position={[0, -0.005, 0]}
            onClick={(e) => handleClick(e)}
          />
        </group>

        <group position={[0, 0, -0.136]}>
          <mesh
            geometry={nodes.Plane040.geometry}
            material={materials['Sole Material']}
            material-color={customization.layerColor['Sole Material']}
            onClick={(e) => handleClick(e)}
          />
          <mesh
            geometry={nodes.Plane040_1.geometry}
            material={materials['Insole Material right']}
            material-color={customization.layerColor['Insole Material right']}
            onClick={(e) => handleClick(e)}
          />
          <mesh
            geometry={nodes.Plane040_2.geometry}
            material={materials['Main Body Material']}
            material-color={customization.layerColor['Main Body Material']}
            onClick={(e) => handleClick(e)}
          />
          <mesh
            geometry={nodes.Plane040_3.geometry}
            material={materials['Main Shoe Inside']}
            material-color={customization.layerColor['Main Shoe Inside']}
            onClick={(e) => handleClick(e)}
          />
          <mesh
            geometry={nodes.Laces005.geometry}
            material={materials['Laces Material']}
            material-color={customization.layerColor['Laces Material']}
            position={[-0.087, 0.081, -0.001]}
            rotation={[0, 0, 0.45]}
            onClick={(e) => handleClick(e)}
          />
          <mesh
            geometry={nodes.Nike_Logo_left004.geometry}
            material={materials['Logo left Material']}
            material-color={customization.layerColor['Logo left Material']}
            position={[0.213, 0.065, 0.033]}
            rotation={[0, 0.174, 0]}
            onClick={(e) => handleClick(e)}
          />
          <mesh
            geometry={nodes.Nike_Logo_right004.geometry}
            material={materials['Logo right Material']}
            material-color={customization.layerColor['Logo right Material']}
            position={[0.213, 0.065, -0.087]}
            rotation={[0, 0.044, 0]}
            onClick={(e) => handleClick(e)}
          />
          <mesh
            geometry={nodes.Shoe_Flap008.geometry}
            material={materials['Tag materialright.001']}
            material-color={customization.layerColor['Tag materialright.001']}
            position={[0, -0.005, 0]}
            onClick={(e) => handleClick(e)}
          />
          <mesh
            geometry={nodes.Shoe_Flap009.geometry}
            material={materials['Flap Material.002']}
            material-color={customization.layerColor['Flap Material.002']}
            position={[0, -0.005, 0]}
            onClick={(e) => handleClick(e)}
          />
        </group>
      </group>
    </Bounds>
  );
}

export default ModelNike;
