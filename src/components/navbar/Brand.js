import React from 'react'
import styled from "styled-components";

import logo from "../../assets/logos/sales-whale-logo.svg";

const Brand = () => {
  return (
	  <ImageContainer>
      <svg width="186" height="32" viewBox="0 0 186 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.7233 3.88902C27.4966 3.46876 29.3066 3.5382 30.9327 4.41159C30.6019 4.23193 30.3311 3.84733 30.0756 3.48436C29.9361 3.28625 29.8011 3.09458 29.6634 2.94619C29.1521 2.39437 28.5892 1.89738 27.9711 1.46251C25.5394 -0.2514 20.8782 -0.898226 18.9211 1.98874C18.0308 3.30432 18.3067 5.35442 20.205 5.5006C21.372 5.59224 22.5434 5.10076 23.6946 4.61773C24.3797 4.33027 25.0577 4.04581 25.7233 3.88902ZM28.1036 6.62615C33.8353 6.62615 38.4818 11.2416 38.4818 16.9352C38.4818 18.9414 37.9042 20.8125 36.9035 22.3948C34.0708 27.9897 27.2427 31.9364 19.2705 31.9364C17.5562 31.9364 15.7461 31.6952 14.0686 31.3481C12.3947 31.0045 10.6472 30.387 9.12779 29.6122C7.88432 28.9764 6.67028 28.1687 5.61076 27.2625C1.575 23.8127 0.00042653 19.0145 0.927511 13.3539C1.05627 12.5718 1.34323 11.8044 1.6265 11.0626C1.67075 10.9477 1.71774 10.8332 1.76474 10.7187C2.01085 10.1191 2.2573 9.51867 2.11212 8.85898C1.99474 8.33697 1.66654 7.89758 1.34489 7.46697C1.22294 7.30371 1.10194 7.14172 0.993731 6.97697C0.280023 5.89162 -0.463116 3.55281 0.364638 2.36148C1.54925 0.647579 3.99204 1.80967 4.93384 3.14718C5.40474 3.81593 6.22881 5.42751 5.64755 6.63346C6.37965 5.89893 7.86593 5.52984 8.86291 5.52618C10.6067 5.51887 12.288 6.36303 13.285 7.78094C14.2967 9.22442 13.9288 10.635 12.1519 11.2124C11.2616 11.5011 10.2572 11.4572 9.34117 11.3549C8.97281 11.3137 8.56101 11.1733 8.1384 11.0292C7.10064 10.6754 5.99771 10.2994 5.31277 11.3147C4.71678 12.1954 4.40776 13.4781 4.49605 14.5306C4.72782 17.2787 8.07195 18.682 10.5221 18.2215C13.1709 17.7245 14.6977 15.8535 16.217 13.8107C18.5679 10.6496 21.5919 7.78825 25.3959 6.98428C26.2605 6.7504 27.1655 6.62615 28.1036 6.62615Z" fill="#1C96F8"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M76.6427 6.48874H80.2112V25.1115H76.6427V6.48874ZM53.0314 22.7105C51.3465 22.7105 49.3194 21.7896 48.3371 20.8687L46.792 23.3537C48.2231 24.6656 50.5003 25.4477 52.8622 25.4477C56.6294 25.4477 58.7374 23.5766 58.7374 21.1209C58.7374 17.7698 55.6177 17.1559 53.2853 16.71C51.7659 16.4031 50.699 16.0961 50.699 15.2593C50.699 14.4772 51.5451 14.0021 52.8364 14.0021C54.4919 14.0021 56.0371 14.7001 56.8538 15.5662L58.2886 13.1361C56.9384 12.0763 55.1137 11.2943 52.807 11.2943C49.2348 11.2943 47.2408 13.2749 47.2408 15.537C47.2408 18.7333 50.2204 19.3027 52.5479 19.7475L52.5826 19.7541C54.1277 20.0611 55.3087 20.3937 55.3087 21.3438C55.3087 22.1807 54.5766 22.7105 53.0314 22.7105ZM65.2307 25.4477C67.0002 25.4477 68.6042 24.8045 69.5313 23.7155V25.1151H73.0999V16.4031C73.0999 12.5221 70.2597 11.2943 67.1694 11.2943C65.032 11.2943 62.8982 11.9667 61.239 13.4174L62.5892 15.7891C63.7407 14.7257 65.0909 14.1958 66.5514 14.1958C68.3504 14.1958 69.5313 15.0912 69.5313 16.4579V18.3289C68.63 17.2399 67.0297 16.6808 65.2307 16.6808C63.0638 16.6808 60.5069 17.8283 60.5069 20.982C60.5069 23.9969 63.0675 25.4477 65.2307 25.4477ZM66.6654 19.0233C67.8169 19.0233 68.9427 19.4143 69.5313 20.1963V21.87C68.9427 22.6521 67.8169 23.0431 66.6654 23.0431C65.2601 23.0431 64.1086 22.3195 64.1086 21.0624C64.1086 19.7505 65.2601 19.0233 66.6654 19.0233ZM96.7111 18.7163C96.7111 14.3055 93.9556 11.2906 89.9088 11.2906C85.7774 11.2906 82.8821 14.448 82.8857 18.3509C82.8857 22.6813 86.0055 25.444 90.1369 25.444C92.2449 25.444 94.3787 24.8009 95.7288 23.573L94.1542 21.2853C93.2823 22.1222 91.7924 22.6265 90.5268 22.6265C88.2202 22.6265 86.8443 21.2013 86.6198 19.4984H96.7111V18.7163ZM93.2529 17.0974H86.5647C86.7339 15.7599 87.6904 14.1118 89.9088 14.1118C92.2706 14.1118 93.1683 15.8147 93.2529 17.0974ZM99.6615 20.8687C100.644 21.7896 102.671 22.7105 104.356 22.7105C105.901 22.7105 106.633 22.1807 106.633 21.3438C106.633 20.3937 105.452 20.0611 103.907 19.7541L103.872 19.7475C101.545 19.3027 98.5652 18.7333 98.5652 15.537C98.5652 13.2749 100.559 11.2943 104.131 11.2943C106.434 11.2943 108.263 12.0763 109.613 13.1361L108.178 15.5662C107.362 14.7001 105.816 14.0021 104.157 14.0021C102.866 14.0021 102.02 14.4772 102.02 15.2593C102.02 16.0961 103.087 16.4031 104.606 16.71C106.938 17.1559 110.058 17.7698 110.058 21.1209C110.058 23.5766 107.95 25.4477 104.183 25.4477C101.821 25.4477 99.5438 24.6656 98.1127 23.3537L99.6615 20.8687ZM118.891 25.1151L121.757 15.928L124.623 25.1151H128.416L132.547 11.6305H128.843L126.312 20.7043L123.332 11.6305H120.157L117.177 20.7043L114.646 11.6305H110.937L115.069 25.1151H118.891ZM143.51 16.9037C143.51 15.0327 142.528 14.448 140.979 14.448C139.603 14.448 138.507 15.23 137.889 16.0376V25.1115H134.321V6.48874H137.889V13.3846C138.761 12.3504 140.446 11.2906 142.668 11.2906C145.648 11.2906 147.083 12.9095 147.083 15.5333V25.1115H143.514V16.9037H143.51ZM154.474 25.4477C156.243 25.4477 157.847 24.8045 158.774 23.7155V25.1151H162.343V16.4031C162.343 12.5221 159.503 11.2943 156.412 11.2943C154.275 11.2943 152.141 11.9667 150.482 13.4174L151.832 15.7891C152.984 14.7257 154.334 14.1958 155.794 14.1958C157.593 14.1958 158.774 15.0912 158.774 16.4579V18.3289C157.873 17.2399 156.273 16.6808 154.474 16.6808C152.307 16.6808 149.75 17.8283 149.75 20.982C149.75 23.9969 152.31 25.4477 154.474 25.4477ZM155.908 19.0233C157.06 19.0233 158.186 19.4143 158.774 20.1963V21.87C158.186 22.6521 157.06 23.0431 155.908 23.0431C154.503 23.0431 153.352 22.3195 153.352 21.0624C153.352 19.7505 154.503 19.0233 155.908 19.0233ZM165.886 6.48874H169.454V25.1115H165.886V6.48874ZM185.954 18.7163C185.954 14.3055 183.198 11.2906 179.152 11.2906C175.02 11.2906 172.125 14.448 172.129 18.3509C172.129 22.6813 175.248 25.444 179.38 25.444C181.488 25.444 183.622 24.8009 184.972 23.573L183.397 21.2853C182.525 22.1222 181.035 22.6265 179.77 22.6265C177.463 22.6265 176.087 21.2013 175.863 19.4984H185.954V18.7163ZM179.152 14.1118C181.514 14.1118 182.411 15.8147 182.496 17.0974H175.808C175.977 15.7599 176.933 14.1118 179.152 14.1118Z" fill="#17191B"/>
      </svg>
	  </ImageContainer>
  )
}

export default Brand;

const ImageContainer = styled.div`
  width: 250px;
  padding-left: 4rem;
  @media(max-width: 789px){
    padding-left: 1.5rem;
  }
  @media(max-width: 500px){
    width: 35px;
    padding-top: 0.5rem;
    padding-left: 0;    
    margin: 0.5rem;
  }
`
