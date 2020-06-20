import { SearchQuery, SearchQuery_search } from "src/types/graphql";

export type SearchStackRouteParamsList = {
  Search: undefined;
  PodcastDetails: {
    data: SearchQuery_search;
  }
}