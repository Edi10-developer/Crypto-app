import { Container } from "./styles";

const SelectTheme = ({ theme, changeTheme }) => {
  return (
    <Container onClick={changeTheme}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="45"
        viewBox="10 10 40 63"
      >
        <g
          id="Group_2633"
          data-name="Group 2633"
          transform="translate(-1960 -95)"
        >
          <rect
            id="Rectangle_1108"
            data-name="Rectangle 1108"
            width="67"
            height="63"
            rx="12"
            transform="translate(1960 95)"
            fill={theme.bgColor}
          />
          <g
            id="Iconly_Bulk_Scan"
            data-name="Iconly/Bulk/Scan"
            transform="translate(2010.056 108.944) rotate(90)"
          >
            <g id="Scan" transform="translate(1.38 4.139)">
              <path
                id="Combined_Shape"
                data-name="Combined Shape"
                d="M6.092,10.379a.385.385,0,0,1-.372-.371V8.289A3.13,3.13,0,0,1,8.851,5.164h7.62A3.118,3.118,0,0,1,19.6,8.289v1.718a.387.387,0,0,1-.377.371ZM23.22,7.95V5.389A3.367,3.367,0,0,0,19.826,2.06h-2.2a1.04,1.04,0,0,1-1.05-1.028A1.041,1.041,0,0,1,17.628,0h2.2A5.447,5.447,0,0,1,25.32,5.389V7.95a1.05,1.05,0,0,1-2.1,0ZM0,7.949V5.384A5.443,5.443,0,0,1,5.483,0H7.732A1.041,1.041,0,0,1,8.781,1.031,1.039,1.039,0,0,1,7.732,2.06H5.484A3.361,3.361,0,0,0,2.1,5.384V7.949A1.042,1.042,0,0,1,1.05,8.98,1.041,1.041,0,0,1,0,7.949Z"
                transform="translate(2.516)"
                fill={theme.textColor}
                opacity="0.4"
              />
              <path
                id="Fill_7"
                data-name="Fill 7"
                d="M29.3,0H1.051A1.042,1.042,0,0,0,0,1.031,1.04,1.04,0,0,0,1.051,2.059H2.515V6.975A5.445,5.445,0,0,0,8,12.358h2.247a1.03,1.03,0,1,0,0-2.06H8A3.361,3.361,0,0,1,4.616,6.975V2.059H8.235V3.427a3.13,3.13,0,0,0,3.13,3.126h7.621a3.13,3.13,0,0,0,3.132-3.126V2.059h3.619V6.97a3.366,3.366,0,0,1-3.4,3.329h-2.2a1.03,1.03,0,1,0,0,2.06h2.2a5.448,5.448,0,0,0,5.5-5.39V2.059H29.3a1.039,1.039,0,0,0,1.05-1.028A1.041,1.041,0,0,0,29.3,0"
                transform="translate(0 12.474)"
                fill={theme.textColor}
              />
            </g>
          </g>
        </g>
      </svg>
    </Container>
  );
};
export default SelectTheme;
