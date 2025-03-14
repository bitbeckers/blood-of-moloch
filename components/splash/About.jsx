import { Flex, SimpleGrid, Text, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { MEDIA_FILES } from '../../utils/constants';

const StyledContainer = styled(SimpleGrid)`
  grid-gap: 1rem;
  background-color: #0f0f0e;
  margin-top: 5rem;
  margin-bottom: 2rem;
  align-items: center;
`;
const StyledSubContainer = styled(Flex)`
  flex-direction: column;
  justify-content: space-around;
`;
const StyledHeading = styled(Text)`
  width: 100%;
  font-family: ${theme.fonts.uncial};
  line-height: 48px;
  color: white;
  text-align: left;
  margin-bottom: 1rem;
`;
const StyledBodyText = styled(Text)`
  font-family: ${theme.fonts.sourceSansPro};
  letter-spacing: 1.2px;
  color: white;
  text-align: left;
`;

const StyledLink = styled.a`
  color: #ff3864;
  opacity: 1;
  :hover {
    opacity: 0.85;
  }
`;

export const About = () => {
  return (
    <StyledContainer
      columns={{ base: 1, md: 2, lg: 2 }}
      px={{ lg: '8rem', md: '4rem', base: '2rem' }}
    >
      <StyledSubContainer>
        <StyledHeading fontSize={{ xl: '54px', lg: '44px', base: '36px' }}>
          WTF is Raid Brood?!?
        </StyledHeading>
        <StyledBodyText fontSize={{ lg: '24px', base: '20px' }}>
          Raid Brood is the first of its kind, a DAO dedicated to craft beer and
          crypto.
        </StyledBodyText>
        <br />
        <StyledBodyText fontSize={{ lg: '24px', base: '20px' }}>
          Spun out from{' '}
          <StyledLink href='https://www.raidguild.org/'>RaidGuild</StyledLink>,
          our master brewer cooked up Blood of Moloch, a special Russian
          Imperial Stout to commemorate EthDenver 2022. In the spirit of Web3,
          we started a beer club as a{' '}
          <StyledLink href='https://app.daohaus.club/dao/0x64/0xc6dd517a5d0e6c6962a8357ad47455c0f7b693bf'>
            DAO
          </StyledLink>{' '}
          and invite you to join, taste, and help shape what the next brew will
          be at the next major ETH gathering.
        </StyledBodyText>
      </StyledSubContainer>
      <Image
        src={MEDIA_FILES.illustrations.one}
        alt='illustration'
        w={{ lg: '450px', base: '200px' }}
        ml='auto'
        mr={{ lg: '0', base: 'auto' }}
        mt={{ base: '2rem', lg: '0', md: '0' }}
      />
    </StyledContainer>
  );
};
