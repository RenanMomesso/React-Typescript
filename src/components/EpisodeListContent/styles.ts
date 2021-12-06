import styled from "styled-components";
import media from "styled-media-query";

export const EpisodesContent = styled.div`
  width: 90%;
  margin-top: 50px;
  min-height: 400px;
  overflow-y: scroll;
  max-height: 500px;
  ${media.lessThan("medium")`
    max-height: 400px;
    border-bottom: 1px solid lightgray;
    width: 100%;
`}
`;

export const EpisodeSeason = styled.div`
  height: 55px;
  align-items: flex-start;
  justify-content: flex-start;
  display: flex;
`;

export const TableEpisodes = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  overflow-y: scroll;
  margin-bottom: 20px;

  td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04aa6d;
    color: white;
  }
`;

export const ButtonSeason = styled.button<{
  seasonNumber: number;
  season: number;
}>`
  height: 100%;
  cursor: pointer;
  width: 85px;
  border-top-right-radius: 20px;
  border: none;
  background-color: ${({ season, seasonNumber }) =>
    seasonNumber === season ? "#04aa6d" : "lightgray"};
  z-index: 10;
  color: ${({ season, seasonNumber }) =>
    seasonNumber === season ? "white" : "black"};
  margin-bottom: -2px;
  transition: all 0.4s ease-in;
`;
