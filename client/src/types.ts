export interface User {
  id: number;
  username: string;
  role: 'user' | 'admin';
  created_at?: string;
}

export interface BusRoute {
  id: number;
  name: string;
  route_number: string;
  start_station: string;
  end_station: string;
  first_bus_time: string;
  last_bus_time: string;
  price: number;
  description: string;
  created_at: string;
}

export interface Station {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export interface RouteStation {
  id: number;
  route_id: number;
  station_id: number;
  stop_order: number;
  distance_km: number;
  station_name: string;
  latitude: number;
  longitude: number;
}

export interface BusPosition {
  id: string;
  current_station_index: number;
  total_stations: number;
  direction: 'forward' | 'backward';
  next_arrival_minutes: number;
}

export interface Review {
  id: number;
  route_id: number;
  user_id: number;
  username: string;
  wait_time_rating: number;
  crowdedness_rating: number;
  punctuality_rating: number;
  cleanliness_rating: number;
  comment: string;
  created_at: string;
}

export interface RouteRatings {
  avg_wait_time: number;
  avg_crowdedness: number;
  avg_punctuality: number;
  avg_cleanliness: number;
  review_count: number;
}

export interface SearchResultRoute {
  route: BusRoute;
  stations: RouteStation[];
  is_favorited: boolean;
  bus_positions: BusPosition[];
  ratings: RouteRatings | null;
}

export interface RouteDetailData {
  route: BusRoute;
  stations: RouteStation[];
  bus_positions: BusPosition[];
  is_favorited: boolean;
  reviews: Review[];
  ratings: RouteRatings | null;
}

export interface FavoriteRouteData {
  route: BusRoute;
  stations: RouteStation[];
  ratings: RouteRatings | null;
}

export interface SearchHistoryItem {
  id: number;
  user_id: number;
  query: string;
  created_at: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}
