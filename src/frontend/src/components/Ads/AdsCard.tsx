import {
  Card,
  ImageWrapper,
  Image,
  Content,
  Name,
  Info,
  Price,
  Button,
} from "./styles";

export function AdsCard() {
  return (
    <Card>
      <ImageWrapper>
        <Image
          src="https://via.placeholder.com/400x500"
          alt="Anúncio"
        />
      </ImageWrapper>

      <Content>
        <Name>Julia Monteiro</Name>

        <Info>23 anos • São Paulo</Info>

        <Price>A partir de R$ 350</Price>

        <Button>Contato</Button>
      </Content>
    </Card>
  );
}
