-- Main.elm
module Main exposing (main)

import Browser
import Html exposing (..)

view : Model -> Html ()
view _ =
  h1 [] [ text "Hello, Elm!" ]


type alias Model = {}

init : () -> (Model, Cmd ())
init _ =
  ( { }
  , Cmd.none
  )

update : () -> Model -> (Model, Cmd ())
update m model = 
  case m of
    _ -> ({}, Cmd.none)

subscriptions : Model -> Sub ()
subscriptions model = Sub.none

main =
  Browser.element
    { init = init
    , view = view
    , update = update
    , subscriptions = subscriptions
    }

