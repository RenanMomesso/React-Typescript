export const getSeasonAndSerieNumber = (pathname: string) => {
  const serie = pathname.split("/");
  const seasonNumber = serie[3];
  const episodeNumber = serie[2];
  return {
    season: +seasonNumber,
    episode: +episodeNumber,
  };
};
