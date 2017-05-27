module Main exposing (..)

type alias Model = String
type Msg = NoOp

main : Program Never Model Msg
main =
  Platform.program
    { init = init
    , update = update
    , subscriptions = \_ -> Sub.none
    }

init : ( Model, Cmd Msg )
init =
  ( "", Cmd.none )

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
  case msg of
    NoOp ->
      ( model, Cmd.none )

