import { useNavigate } from 'react-router-dom';

function ModelSelection() {
  const navigate = useNavigate();

  const handleModelSelect = (modelId) => {
    navigate(`/admin/tables/add-shoe/${modelId}`);
  };
}
