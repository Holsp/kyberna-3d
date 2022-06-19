import { useState } from "react"
import floorHover from "../../styles/floorHover.module.scss"

const ThirdFloor = ({ setRoomName }) => {

    const [colorRoomName, setColorRoomName] = useState("test");

    function getFloor(e) {
        setRoomName(e.target.getAttribute("id"));
        setColorRoomName(e.target.getAttribute("id"));
        console.log(colorRoomName);
    }




    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1879 301.53"><g id="Rooms">
            <polygon id="Museum" className={colorRoomName === "Museum" ? floorHover.selected : floorHover.polygon} onClick={(e) => getFloor(e)} points="120.07 2.5 78.71 94.5 78.71 128.2 259.48 128.2 259.48 94.5 296.25 2.5 120.07 2.5" />
            <polygon id="T302" className={colorRoomName === "T302" ? floorHover.selected : floorHover.polygon} onClick={(e) => getFloor(e)} points="757.35 2.5 745.1 94.5 745.1 128.2 259.48 128.2 259.48 94.5 296.25 2.5 757.35 2.5" />
            <polygon id="Kabinet-eko" className={colorRoomName === "Kabinet-eko" ? floorHover.selected : floorHover.polygon} onClick={(e) => getFloor(e)} points="939.5 2.5 939.5 128.2 745.1 128.2 745.1 94.5 757.35 2.5 939.5 2.5" />
            <polygon id="Elektro" className={colorRoomName === "Elektro" ? floorHover.selected : floorHover.polygon} onClick={(e) => getFloor(e)} points="1125.01 2.5 1135.73 94.5 1135.73 128.2 939.5 128.2 939.5 2.5 1125.01 2.5" />
            <polygon id="Helpdesk" className={colorRoomName === "Helpdesk" ? floorHover.selected : floorHover.polygon} onClick={(e) => getFloor(e)} points="1255.22 2.5 1276.16 94.5 1275.14 128.2 1135.73 128.2 1135.73 94.5 1125.01 2.5 1255.22 2.5" />
            <polygon id="Kabinet-elz" className={colorRoomName === "Kabinet-elz" ? floorHover.selected : floorHover.polygon} onClick={(e) => getFloor(e)} points="1382.37 2.5 1408.41 94.5 1408.41 128.2 1275.14 128.2 1275.14 94.5 1255.22 2.5 1382.37 2.5" />
            <polygon id="Aut" className={colorRoomName === "Aut" ? floorHover.selected : floorHover.polygon} onClick={(e) => getFloor(e)} points="1575.39 2.5 1609.1 94.5 1609.1 128.2 1408.41 128.2 1408.41 94.5 1382.37 2.5 1575.39 2.5" />
            <polygon id="WC" className={colorRoomName === "WC" ? floorHover.selected : floorHover.polygon} onClick={(e) => getFloor(e)} points="1766.88 2.5 1800.59 94.5 1800.59 128.2 1609.1 128.2 1609.1 94.5 1575.39 2.5 1766.88 2.5" />
            <polygon id="T320" className={colorRoomName === "T320" ? floorHover.selected : floorHover.polygon} onClick={(e) => getFloor(e)} points="1876.5 242.07 1825.1 128.2 1423.73 128.2 1449.78 242.07 1449.78 297.5 1876.5 297.5 1876.5 242.07" />
            <polygon id="Kabinet-psy" className={colorRoomName === "Kabynet-psy" ? floorHover.selected : floorHover.polygon} onClick={(e) => getFloor(e)} points="1298.12 297.5 1449.78 297.5 1449.78 242.07 1423.73 128.2 1275.14 128.2 1298.12 242.07 1298.12 297.5" />
            <polygon id="Kabinet-grafika" className={colorRoomName === "Kabinet-grafika" ? floorHover.selected : floorHover.polygon} onClick={(e) => getFloor(e)} points="1146.46 297.5 1298.12 297.5 1298.12 242.07 1275.14 128.2 1135.73 128.2 1146.46 242.07 1146.46 297.5" />
            <polygon id="Grafika" className={colorRoomName === "Grafika" ? floorHover.selected : floorHover.polygon} onClick={(e) => getFloor(e)} points="939.5 297.5 1146.46 297.5 1146.46 242.07 1135.73 128.2 939.5 128.2 939.5 242.07 939.5 297.5" />
            <polygon id="Reditelna" className={colorRoomName === "Reditelna" ? floorHover.selected : floorHover.polygon} onClick={(e) => getFloor(e)} points="731.82 297.5 939.5 297.5 939.5 128.2 745.1 128.2 731.82 242.07 731.82 297.5" />
            <polygon id="Kancelar" className={colorRoomName === "Kancelar" ? floorHover.selected : floorHover.polygon} onClick={(e) => getFloor(e)} points="577.61 297.5 731.82 297.5 731.82 242.07 745.1 128.2 593.95 128.2 577.61 242.07 577.61 297.5" />
            <polygon id="Sborovna" className={colorRoomName === "Sborovna" ? floorHover.selected : floorHover.polygon} onClick={(e) => getFloor(e)} points="356.9 299.01 577.61 297.5 577.61 242.07 593.95 128.2 389.69 128.2 356.9 242.07 356.9 299.01" />
            <polygon id="Kabinet-prg" className={colorRoomName === "Kabinet-prg" ? floorHover.selected : floorHover.polygon} onClick={(e) => getFloor(e)} points="201.78 297.5 356.9 299.01 356.9 242.07 389.69 128.2 246.71 128.2 201.78 242.07 201.78 297.5" />
            <polygon id="Schodiste3" className={colorRoomName === "Schodiste3" ? floorHover.selected : floorHover.polygon} onClick={(e) => getFloor(e)} points="2.5 297.5 201.78 297.5 201.78 242.07 246.71 128.2 53.69 128.2 2.5 242.07 2.5 297.5" />
        </g>
            <g id="Shadows">
                <rect x="3.27" y="242.2" width="1874" height="55.43" style={{ fill: "#231f20", opacity: "0.05", pointerEvents: "none" }} />
                <rect x="78.71" y="94.5" width="1721.87" height="33.7" style={{ fill: "#231f20", opacity: "0.05", pointerEvents: "none" }} />
            </g>
            <g>
                <path id="border" data-name="border" d="M262,130.7H76.21V94L118.46,0H299.94L262,95Zm-180.77-5H257V94L292.55,5H121.69L81.21,95Zm666.39,5H257V94L294.55,0H760.21L747.6,94.67ZM262,125.7H742.6l0-31.53L754.5,5H297.94L262,95Zm680,5H742.6l0-36.53L755.16,0H942Zm-194.4-5H937V5H759.54L747.6,94.67Zm390.63,5H937V0h190.24l11,94.5ZM942,125.7h191.23v-31L1122.79,5H942Zm335.56,5H1133.23v-36L1122.2,0h135l21.45,94.26Zm-139.33-5h134.48l.94-31L1253.23,5H1127.82l10.41,89.35Zm272.69,5H1272.64V94.77L1252.12,0h132.14l26.66,94.15Zm-133.28-5h128.28V94.85L1380.48,5H1258.32l19.32,89.23Zm334,5H1405.92V94.85L1379.07,0h198.07l34.46,94.06Zm-200.68-5H1606.6V94.94L1573.65,5h-188l25.24,89.15Zm392.16,5H1606.6V94.94L1571.82,0h196.81l34.45,94.06Zm-191.48-5h186.48V94.94L1765.14,5H1579l32.63,89.06ZM1879,300H1447.28V242.36L1420.6,125.7h406.11L1879,241.54Zm-426.72-5H1874V242.61L1823.48,130.7H1426.87l25.41,111.09Zm0,5H1295.62V242.32L1272.08,125.7h153.65l26.55,116.09Zm-151.66-5h146.66V242.36L1421.74,130.7H1278.19l22.43,111.12Zm0,5H1144V242.19L1133,125.7h144.19l23.44,116.37ZM1149,295h146.66V242.32L1273.09,130.7H1138.48L1149,242Zm0,5H937V125.7h201l11,116.37Zm-207-5h202V242.19l-10.5-111.49H942Zm0,5H729.32l0-58.21L742.87,125.7H942Zm-207.68-5H937V130.7H747.32l-13,111.52Zm0,5H575.11l0-58.28,16.65-116H747.9L734.32,242.22Zm-154.21-5H729.32l0-53.21L742.29,130.7H596.11l-16,111.55Zm-225.7,6.53V241.72l33.4-116h209L580.11,242.25V300Zm5-59.1v54.06L575.11,295V241.9l15.95-111.2H391.57Zm0,59.1L199.28,300V241.6l.17-.44L245,125.7H393l-33.6,116.73ZM204.28,295l150.13,1.46V241.72l32-111h-138L204.28,242.55Zm0,5H0V241.54L52.07,125.7H250.39L204.28,242.55ZM5,295H199.28V241.6l.17-.44L243,130.7H55.31L5,242.61Z" style={{ fill: "#f37226", pointerEvents: "none" }} />
            </g>
        </svg>
    )
}

export default ThirdFloor;