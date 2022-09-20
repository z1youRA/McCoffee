package main
import (
	"context"
	"fmt"
	"net"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

func (app *App) startup(ctx context.Context) {
	app.ctx = ctx
	// runtime.WindowMaximise(ctx)
	app.StartListenUDP()
}

func (app *App) StartListenUDP() {
	go func() {
		udp_addr, err := net.ResolveUDPAddr("udp", "127.0.0.1:9000")
		if err != nil {
			fmt.Println(err)
			return
		}
		udp_conn, err := net.ListenUDP("udp", udp_addr)
		if err != nil {
			fmt.Println(err)
			return
		}

		buf := make([]byte, 655350)
		for {
			n, _, err := udp_conn.ReadFromUDP(buf)
			if err != nil {
				fmt.Println(err)
				return
			}
			// fmt.Println(string(buf[:n]))
			runtime.EventsEmit(app.ctx, "receiveUDPMessage", string(buf[0:n]))
		}
	}()
}


// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}
