import { Button } from '@salutejs/plasma-ui';
import { useNavigate } from 'react-router-dom';

type NavigateButtonType = {
  id: string,
  url: string,
  text: string,
  view: "primary" | "secondary" | "success" | "warning" | "critical" | "checked" | "overlay" | "clear" | undefined,
  size: string,
}


export const NavigateButton = ({ text, url, id, view, size }: NavigateButtonType) => {
  const navigateItem = useNavigate()
  return (
    <Button size={size} view={view} text={text} onClick={() => navigateItem(`/${url}/${id}`)} />
  )

}