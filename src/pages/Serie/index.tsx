import { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getEpisode, getEpisodesList } from "../../redux/actions";
import { RootStore } from "../../redux/store";
import { getSeasonAndSerieNumber } from "../../utils/getSeasonAndEpisodeNumber";

import * as S from "./styles";
import EpisodeListContent from "../../components/EpisodeListContent";
import Header from "../../components/Header";

const Serie = () => {
  const dispatch = useDispatch();
  const serie = useSelector((state: RootStore) => state.episodes);
  const {
    location: { pathname },
    goBack,
  } = useHistory();

  useEffect(() => {
    const { episode, season } = getSeasonAndSerieNumber(pathname);
    dispatch(getEpisode(season, episode));
    dispatch(getEpisodesList());
  }, [dispatch, pathname]);

  return (
    <S.Wrapper>
      <Header>
        <Link to="/">Home</Link>
      </Header>
      {serie.image.original === "" ? (
        <p>No Image Yet</p>
      ) : (
        <S.ImageEpisode
          src={serie?.image?.original}
          alt={`Image of Powerpuff Girls Serie of episode ${serie.name}`}
        />
      )}
      <S.Title>{serie.name}</S.Title>
      <S.Description dangerouslySetInnerHTML={{ __html: serie.summary }} />

      <EpisodeListContent episodes={serie} />
    </S.Wrapper>
  );
};

export default Serie;
