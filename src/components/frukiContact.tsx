import { Box, Button, Typography } from '@mui/material'
import image9 from 'assets/home/img_9.png'
import { defaultPl } from 'components/defaultPl'
import { NewGeneric } from 'components/newGeneric'
import { useIsBigScreen } from 'components/useIsBigScreen'
import * as React from 'react'

export function FrukiContact() {
  const isBig = useIsBigScreen()
  return (
    <NewGeneric
      height={{ xs: 500, sm: 500, md: 800 }}
      sx={{
        background: '#5F99AF',
        flexDirection: {
          xs: 'column',
          sm: 'column',
          md: 'row',
        },
      }}
      right={{
        element: (
          <>
            {isBig && (
              <svg
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  zIndex: 0,
                }}
                width="545"
                height="292"
                viewBox="350 0 545 292"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M845.065 -11.785L252.85 -604L-3.64884e-05 -351.15L592.215 241.065C660.352 309.201 772.412 307.674 842.432 237.654C911.674 168.412 913.201 56.3517 845.065 -11.785Z"
                  fill="#034638"
                />
              </svg>
            )}
            <Typography
              variant={isBig ? 'h1' : 'h5'}
              sx={{ pl: defaultPl, fontWeight: 700, zIndex: 2 }}
              color="secondary.contrastText"
            >
              Precisa de ajuda?{' '}
            </Typography>
            <Typography
              color="secondary.contrastText"
              sx={{ pl: defaultPl }}
              variant="body1"
              fontSize={20}
            >
              Se você está com alguma dúvida, estamos aqui para ajudar! Escolha
              seu canal preferido para podermos atender você da melhor forma.{' '}
            </Typography>
            <Box
              sx={{ pl: defaultPl, '& > div:nth-of-type(n + 2)': { mt: 2 } }}
            >
              <Box>
                <Button
                  variant="outlined"
                  startIcon={
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.03539 17.1017L5.22832 17.4056L4.40963 20.371L7.47594 19.5733L7.77188 19.7474C9.01543 20.4795 10.4414 20.867 11.8953 20.8677H11.8985C16.3638 20.8677 19.998 17.2624 20 12.8316C20.0005 10.6841 19.1588 8.66497 17.6292 7.14606C16.0995 5.6273 14.0657 4.79022 11.9016 4.78931C7.43281 4.78931 3.79864 8.39417 3.79688 12.825C3.79626 14.3434 4.22435 15.8221 5.03539 17.1017ZM8.91431 8.36504C9.08782 8.37209 9.27983 8.38021 9.46229 8.78259C9.5867 9.05708 9.79584 9.56836 9.96286 9.97663C10.0866 10.279 10.1872 10.525 10.2132 10.5764C10.2739 10.6973 10.3146 10.8384 10.2333 10.9997C10.2211 11.024 10.2098 11.047 10.199 11.0689C10.1381 11.1922 10.0933 11.2829 9.99016 11.4027C9.94934 11.45 9.90713 11.5009 9.86493 11.5518C9.78115 11.6529 9.69741 11.7539 9.62464 11.826C9.50251 11.9464 9.37565 12.0773 9.51773 12.3189C9.65981 12.5609 10.1486 13.3519 10.8726 13.9925C11.6505 14.6806 12.3261 14.9716 12.6693 15.1194C12.7367 15.1484 12.7913 15.1719 12.8313 15.1918C13.0747 15.3127 13.2169 15.2926 13.3589 15.131C13.5011 14.9699 13.9675 14.4257 14.1299 14.1841C14.2923 13.9421 14.4546 13.9823 14.6779 14.0629C14.9012 14.1436 16.0985 14.7282 16.3422 14.8491C16.3896 14.8726 16.4339 14.8938 16.475 14.9135C16.6451 14.9949 16.76 15.0499 16.809 15.131C16.8699 15.2321 16.8699 15.7157 16.6669 16.28C16.464 16.8443 15.4696 17.3885 15.023 17.4287C14.9801 17.4326 14.9374 17.4375 14.8935 17.4427C14.4808 17.4909 13.9601 17.5518 12.1004 16.8242C9.81291 15.9291 8.30453 13.711 7.99252 13.2523C7.96688 13.2146 7.94932 13.1887 7.94007 13.1765L7.93743 13.173C7.80634 12.9992 6.94566 11.8578 6.94566 10.6771C6.94566 9.56433 7.49683 8.98098 7.75051 8.71249C7.76787 8.69411 7.78384 8.67721 7.79815 8.66172C8.02121 8.42005 8.28511 8.35942 8.44753 8.35942C8.45813 8.35942 8.46872 8.35942 8.47931 8.35942C8.63092 8.35939 8.7815 8.35936 8.91431 8.36504Z"
                        fill="#41B02A"
                      />
                    </svg>
                  }
                  sx={{
                    whiteSpace: 'nowrap',
                    minWidth: 'auto',
                    background: 'white',
                    ':hover': { background: 'white' },
                  }}
                  size="large"
                >
                  Mandar mensagem
                </Button>
              </Box>
              <Box>
                <Button
                  sx={{
                    whiteSpace: 'nowrap',
                    minWidth: 'auto',
                    background: 'white',
                    ':hover': { background: 'white' },
                  }}
                  startIcon={
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.25 6.49854C5.2835 6.49854 4.5 7.28204 4.5 8.24854C4.5 12.0195 5.60803 15.1047 7.75092 17.2476C9.89381 19.3905 12.9791 20.4985 16.75 20.4985C17.7165 20.4985 18.5 19.715 18.5 18.7485V15.7485C18.5 15.0496 17.9411 14.5239 17.2983 14.4829C16.5604 14.4358 15.6579 14.2872 15.0522 14.0599C14.4701 13.8414 13.6388 14.021 13.3239 14.7556L13.0199 15.465C12.1644 15.3463 11.3477 14.9191 10.7082 14.3024C10.0657 13.6828 9.64768 12.9172 9.53245 12.1653L10.4071 11.6655C11.0502 11.298 11.1698 10.5343 10.9579 9.99626C10.7207 9.39401 10.5643 8.46207 10.5157 7.70026C10.4748 7.0574 9.949 6.49854 9.25009 6.49854L6.25 6.49854Z"
                        fill="#41B02A"
                      />
                    </svg>
                  }
                  variant="outlined"
                  color="primary"
                  size="large"
                >
                  Ligar agora
                </Button>
              </Box>
              <Box>
                <Button
                  startIcon={
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.5 9.24854C4.5 7.72975 5.73122 6.49854 7.25 6.49854H16.75C18.2688 6.49854 19.5 7.72975 19.5 9.24854V15.2485C19.5 16.7673 18.2688 17.9985 16.75 17.9985H12.7515C12.4487 17.9985 12.1562 18.1084 11.9283 18.3078L8.49388 21.313C8.27241 21.5068 7.95807 21.5531 7.69009 21.4315C7.4221 21.3099 7.25 21.0428 7.25 20.7485V18.6235C7.25 18.2784 6.97018 17.9985 6.625 17.9985C5.4514 17.9985 4.5 17.0471 4.5 15.8735V9.24854ZM7.5 10.7485C7.5 10.3343 7.83579 9.99854 8.25 9.99854H14.25C14.6642 9.99854 15 10.3343 15 10.7485C15 11.1627 14.6642 11.4985 14.25 11.4985H8.25C7.83579 11.4985 7.5 11.1627 7.5 10.7485ZM7.5 13.7485C7.5 13.3343 7.83579 12.9985 8.25 12.9985H11.25C11.6642 12.9985 12 13.3343 12 13.7485C12 14.1627 11.6642 14.4985 11.25 14.4985H8.25C7.83579 14.4985 7.5 14.1627 7.5 13.7485Z"
                        fill="#41B02A"
                      />
                    </svg>
                  }
                  sx={{
                    whiteSpace: 'nowrap',
                    minWidth: 'auto',
                    background: 'white',
                    ':hover': { background: 'white' },
                  }}
                  variant="outlined"
                  color="primary"
                  size="large"
                >
                  Conversar no chat online
                </Button>
              </Box>
            </Box>
          </>
        ),
        sx: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          p: 2,
          pl: 0,
        },
      }}
      left={{
        sx: {
          backgroundImage: `url(${image9})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderWidth: 2,
          borderBottomRightRadius: {
            xs: 240,
            sm: 240,
            md: 440,
          },
        },
      }}
    />
  )
}