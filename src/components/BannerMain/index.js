import React from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import { BannerMainContainer, ContentAreaContainer, WatchButton } from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

export default function BannerMain({
  videoTitle,
  videoDescription,
  url,
}) {
  const youTubeID = getYouTubeId(url);
  const bgUrl = 'https://wiki.geloefogo.com/images/d/d4/Season5Dance_of_Dragons16.png';

  return (
    <BannerMainContainer backgroundImage={bgUrl}>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>
            {videoTitle}
          </ContentAreaContainer.Title>

          <ContentAreaContainer.Description>
            {videoDescription}
            <p>&quot;A luta entre Rhaenyra Targaryen e seu meio-irmão Aegon pelo controle sobre os Sete Reinos. Ambos pensaram que pertenciam ao Trono de Ferro. Quando as pessoas começaram a se declarar para um deles ou o outro, sua luta dividiu o reino em dois. Irmãos lutaram contra irmãos, dragões lutaram contra dragões. Quando terminaram, milhares estavam mortos. E foi um desastre para os Targaryens também. Eles nunca se recuperaram verdadeiramente&quot;</p>
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <VideoIframeResponsive
            youtubeID={youTubeID}
          />
          <WatchButton>
            Assistir
          </WatchButton>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
