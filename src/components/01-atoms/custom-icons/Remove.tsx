import { FC } from "react"

type RemoveProps = {
    classSvg?: string
    normalColor?: string
    hoverColor?: string
    onClick?: ()=> void
  }
  
  export const Remove: FC<RemoveProps> = ({
    classSvg, 
    normalColor='#FD536D', 
    hoverColor= '#FFF',
    onClick
}) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill={normalColor}
        className={`${classSvg} transition-colors duration-300`}
        style={{ cursor: 'pointer' }}
        onMouseEnter={(e) => e.currentTarget.setAttribute('fill', hoverColor)}
        onMouseLeave={(e) => e.currentTarget.setAttribute('fill', normalColor)}
        onClick={onClick}
      >
        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
      </svg>
    );
  }